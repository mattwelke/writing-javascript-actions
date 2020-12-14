import { getInput } from '@actions/core';
import { getOctokit } from '@actions/github';

async function run() {
    try {
        const issueTitle = getInput("issue-title");
        const jokeBody = getInput("joke");
        const token = getInput("repo-token");

        const octokit = getOctokit(token);

        await octokit.issues.create({
            repo: github.context.repo.repo,
            owner: github.context.repo.owner,
            title: issueTitle,
            body: jokeBody,
        });
    } catch (err) {
        core.setFailed(err.message);
    }
}

run()
