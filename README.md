# flow-generated-mergedata

This recipe will step you through creating a Flow launched from an Account. The Flow then displays an input for the User to enter text that will not be saved in Salesforce. The Flow then displays Mambo Merge and passes into it the original Account record data but with the newly entered text added to it as an extra merge field (even though it was never saved).

Check out our <a href="https://www.mambomerge.com/support/">Support Page</a>  and <a href="https://www.youtube.com/@mambomerge">Youtube channel</a> for the latest features. 

## Instructions
1. Install Mambo Merge from the AppExchange by following these instructions: https://www.mambomerge.com/support/installation-from-appexchange/

2. Use the below button to deploy this repo to your Salesforce to create a new Flow, and new Aura App
<a href="https://githubsfdeploy.herokuapp.com?owner=mambomerge&repo=flow-generated-mergedata&ref=main">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

3. Edit your lightning page to include the new Mambo Merge Aura component, Mambo Merge Flow Wrapper, by following these instructions: https://www.mambomerge.com/support/editing-lightning-pages/

4. Upload your docx Template onto the Files tab by following these instructions: https://www.mambomerge.com/support/how-to-use-mambo-merge-to-generate-a-new-word-docx-file-drag-and-drop-copy/

5. Create a new Mambo Merge Configuration with your template.(<a href="https://www.youtube.com/watch?v=_AZq_EjfRqg&t=203s">Video Tutorial here.</a>) 

6. Assign your Configuration to the Mambo Merge Component, using the Configuration Id as the Template Id. (<a href="https://youtu.be/bFtmAfx6SG0">Video Tutorial here.</a>)


