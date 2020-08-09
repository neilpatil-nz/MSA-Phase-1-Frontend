# MSA Phase 1 - Movie Searcher (IMDB Rip-off)

This is my project for the MSA Phase 1 Frontend & Dev Ops assignment. It simply fetches any Movie or TV Show through a Movie Database API.

View it here:
https://msa-phase1-devops-npat692.azurewebsites.net/


<p align="center">
  <img src="https://i.imgur.com/387aCy0.jpg" width="700" alt="accessibility text">
</p>

## Azure Pipelines

The Azure Pipeline has been built in such a way that whenever a commit is applied to either the ``develop`` or ``master`` branch, it triggers a sequence of events:

1. Installs `Node.js`
2. Builds the React App through ``npm install and build``
3. Archives the commited files into a `zip`
4. Lastly, publishes the pipeline

It excludes any commits to the `README.md` file.

    paths:
       exclude:
          - README.md
              
The API that I used for the project comes with a key, but I was not able to hide it through the aforementioned code, as can be seen in the `azure_pipelines.yml` file. Fortunately, the API does not have a daily limit. 
              
    - task: CmdLine@2
        inputs:
          script: 'echo REACT_APP_API_KEY = $(APP_KEY) > $(rootDir)/.env'
        displayName: 'Setting environment variables' 
        
## Improvements

* Improve UI
* Implement a way to hide the API key
* More search filters
