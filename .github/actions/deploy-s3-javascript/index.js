const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');


const run = async () => {
	// Get input values
	const bucket = core.getInput('bucket', { trimWhitespace: true, required:true });
	const region = core.getInput('bucket-region', { trimWhitespace: true, required:true });
	const artifact = core.getInput('dist-folder', { required:true });

	// Upload files (can be used Amazon-SDK or execute aws command)
	const s3Uri = `s3://${bucket}`;
	// `aws s3 sync <local-folder> <s3-bucket>`
	await exec.exec(`aws s3 sync ${artifact} ${s3Uri} --region ${region}`); // syncronize the folder

	const websiteUrl = `http://${bucket}.s3-website.${region}.amazonaws.com`;
	core.setOutput('website-url', websiteUrl);
	core.notice(`Finishing workflow. Website Url: ${websiteUrl}`);
}

run();