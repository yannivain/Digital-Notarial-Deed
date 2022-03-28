# Digital-Notarial-Deed
Open-Legal-Lab challenge #12 "Digitale Notarielle Urkunde". 
- Open Legal Lab Hackathon: https://opendata.ch/events/open-legal-lab-2022/
- Challenge: https://challenges.openlegallab.ch/project/49

## Context and challenge
In Switzerland, the notaries are currently using Paper for the contracts about public deeds. 
It makes the process manual and complicated as it involves printing, signing, scanning manually write the information into the registry. 

The goal of this hackathon is to define a format that would make the process fully digital.
We designed a prototype of an XML structure to store the contract. 
The main requirements are that the contract should be signed and easily computer and human readable. 

The XML is generated and signed through an online formular.

To visualize a "pretty" version of the contract, a XSL template has been created that generate a webpage containing the contract informations. 

## Run the web application
Prerequesites: Node & npm
```text
git clone https://github.com/yannivain/digital-notarial-deed.git
cd digital-notarial-deed/app
npm install
npm run serve
```
Go to http://localhost:8080/

## Visualize the XML contract
Prerequesites: Java
```text
cd visu
java -jar xslt-1.1.0.jar <Link to your XML contract> template.xsl visualization.html
```
Open the HTML into your browser.
