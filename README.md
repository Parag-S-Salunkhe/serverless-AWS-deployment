# serverless-AWS-deployment

## Stack
![Static Badge](https://img.shields.io/badge/Cloud-AWS-brightgreen?style=for-the-badge&logo=Amazon%20AWS&logoColor=white&labelColor=grey&color=blue) 
![Static Badge](https://img.shields.io/badge/Services-S3%2C%20Lambda%2C%20Dynamo%20DB%2C%20CloudFront%2C%20ACM%2C%20Route%2053-%20red?style=for-the-badge&logo=Amazon%20AWS&logoColor=white&labelColor=grey&color=red) 
![Static Badge](https://img.shields.io/badge/Design-JavaScript%2C%20CSS%2C%20HTML-red?style=for-the-badge&logo=css3&logoColor=white&labelColor=orange&color=dark%20green)


## Objective of Cloud Resume Challenge

Blend creativity with cloud computing prowess to transform a mundane CV into a dynamic, cloud-hosted website. By conquering this challenge, you're not just flaunting your tech skills; you're unlocking doors to potential job opportunities. It's the ultimate flex for tech enthusiasts—showcasing your abilities in AWS, web development, and more.
Through AWS hand-on you get to know how a serveless architecture deployment looks. 

## AWS Services and its use for this project (high-level)

### ![Static Badge](https://img.shields.io/badge/AWS%20S3-grey?style=for-the-badge&logo=Amazon%20s3&logoColor=green)  
#### S3 bucket is used for storing the files like html, css and images (all static files) basically to host static website. To keep the bucket private and accessible we use the next AWS service, Cloudfront!

![Static Badge](https://img.shields.io/badge/AWS%20CloudFront-grey?style=for-the-badge&logo=Amazon%20CloudFront&logoColor=purple)
#### By setting OAI (Origin Access Control) it allows access to S3 bucket indix.html file (set root deffault object in cloudfront). It adds extra layer of security by authorizing access to private index.html in S3. It enhances performance by caching at the edge giving low latency while accessing the site which also saves network cost. 

### ![Static Badge](https://img.shields.io/badge/AWS%20Route53-grey?style=for-the-badge&logo=amazonroute53&logoColor=white) & ![Static Badge](https://img.shields.io/badge/ACM(AWS%20Certificate%20Manager)-grey?style=for-the-badge&logoColor=white)

#### Buy domain name from route53(or namecheap), request a SSL certificate from ACM. Custom domain name can be set in route53 and we make the record in route53 point towards cloudfront distribution. Deployment of website using custom DNS over HTTPS is done. 

### ![Static Badge](https://img.shields.io/badge/AWS%20Lambda-grey?style=for-the-badge&logo=awslambda&logoColor=yellow) & ![Static Badge](https://img.shields.io/badge/AWS%20DynamoDB-grey?style=for-the-badge&logo=amazondynamodb&logoColor=violet)

#### Create DynamoDB table with the attributes mentioned in the table(set value 1 for both). We don't want to fetch data directly from DynamoDB
| Primary key                | Attributes |
| -------------------------- | ---------- |
| Partition key: CounterName | string     |
| visitors                   | number     |

Write a lambda function to access table in dynamoDB and then to print the value of hit counter and addinng-storing the value of views in DynamoDB on a hit to website.

Create a [javascript file](Website_temp/index.js) which will fetch request from lambda function and store in a variable we have created which is used to display hit counter on your website.







 





