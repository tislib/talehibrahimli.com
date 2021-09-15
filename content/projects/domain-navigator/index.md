---
title: Domain Navigator
draft: true
slug: domain-navigator
---

## Overview
Domain Navigator is a system which has all available domain list in its database. 
With help of domain navigator system you find any domain by its name, descryption, keywords or whois records.

This system can be used for various purposes, searching domains, searching for some reasons, getting some ideas about domain names for your next business

Our own ranking system will help you find best matches for your searchs.

## Requirements
Website will have following pages
1. Home Page
2. Domain Details Page

### Pages
1. Home Page - You will have a searching functionality, you will be able to search for domain and get result as list
2. Domain Details Page - You will have domain information

### Search Functionality
We will have following logical strucure
1. keyword type
2. keyword
3. domain

keyword type can be name(domain name), meta tag, description, keywords, title, whois parameters(we have various whois parameters and each will have its own keyword type)
keyword types are dynamic

For each domain we will have keywords. For example lets think we have the following information:

1. Domain: testdomain123.com
2. name: testdomain123.com
3. descryption: test testdomain testdomain123 comdomain
4. keywords: test domain 123 com

on behalf of this data. I need an ability to enter test keyword to big search bar and see domains which has test it in any keyword(e.g. name, description, title, whois, etc)

Besides that. I need to have ability to choose specific keywords to search in for. Also I need to have ability to search by multiple keywords, multiple keywords are devided by space

When to show the result. All matching domains will be shown.
In result we will have a match score(or just score) field, which will show how much this information is related to search. like a percentage of searching quality per record

When I click domain, I need to go domain details page. So I will see domain information in detailed view

### Additional requirements
1. I need to have ability to mark domain as favorite one
2. I need to have ability to search domain by tags (ideas: tags can be shown in list in ui and I can click tags to see result)
3. No need to have dedicated page for favorite and tagged domains pages. I need to have ability to search on those or to see those on home screen (like pressing button and seeing favorite domains like search result, or another ideas)

## Domain Model
