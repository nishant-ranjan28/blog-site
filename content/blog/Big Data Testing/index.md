---
title: Big Data Testing
date: "2020-03-05T22:12:03.284Z"
description: "What is Big Data testing?"
tags: ['2020', 'Automation', 'Big Data Testing']
disqus: true
---

![Big Data testing: Credit for this image= xenonstack.com](https://www.xenonstack.com/images/insights/xenonstack-what-is-big-data-testing.png)

### What is Big Data?
Big Data is a term used to describe a collection of data that is huge in size and yet growing exponentially with time. In short such data is so large and complex that none of the traditional data management tools are able to store it or process it efficiently.

### Need for Testing Big Data
Let us assume a classic case of a drastic failure that occurred in a bank. The designers of the bank database name the _Customer Bank location pin code_ column as **CL**, _Customer ID_ column as **CI** and _Customer Phone number_ column as **CP**.

The bank wants to make the key-value pairs of _Customer ID_  **CI** and _Customer Phone number_ **CP**. In this scenario, the MapReduce Algorithm gets messed up between the letters **P** and **L** due to a typing error.

Then, the **CP**(_Customer Phone Number_) is replaced within the key-value pairs **CL**(_Customer bank location Pin_). Now the Customers wouldn’t get **OTP** and **Phone**  **Banking** Facilities.

> To avoid such mistakes, we prefer to test the Big-Data.

### What is Big Data Testing?
Big Data Testing can be defined as the procedure that involves examining and validating the functionality of the Big Data Applications. Big Data is a collection of a huge amount of data that traditional storage systems cannot handle.

### Big Data Testing Environment
Owning the perfect Environment for testing a Big Data Application is very crucial. The basic requirements that makeup Data Testing are as follows.

-   Space for Storing, Processing and Validating Terra bytes of data should be available.
-   The Cluster and its respective nodes should be responsive
-   Data Processing resources like the powerful CPU should be available

### Big Data Testing stages
 - Data Ingestion
 - Data Processing
 - Validation of the output

##### Data Ingestion
Data is first loaded from source to Big Data System using extracting tools. The Storage might be HDFS, MongoDB or any similar storage. Then, the loaded data is cross-checked for errors and missing values.

##### Data Processing
In this stage, the key-value pairs for the data get generated. Later, the MapReduce logic is applied to all the nodes and checked if the algorithm works fine or not. A data validation process takes place here to make sure the output is generated as expected.

##### Validation of the output
At this stage, the output generated is ready to be migrated to the data warehouse. Here, The transformation logic is checked, the data integrity is verified and the key-value pairs at the location are validated for accuracy.

There are many categories involved in which a Big Data Application can be tested.

 - Unit Testing
 - Functional Testing
 - Non-Functional testing
 - Performance Testing
 - Architecture Testing

### Traditional Testing vs Big Data Testing
|Traditional Testing| Big Data testing |
|--|--|
| Supports Structured Data | Supports all types of Data |
| limited Data size does not require special Environment | Special Environment is needed because of the huge data |
| Uses EXCEL based Macros or UI based automation tools | Has a vast range of programmable tools for testing |

