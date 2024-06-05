# Job Application Backend

This project provides a backend API for managing job listings. It includes functionalities for creating, viewing, editing, and deleting job posts. The project is built using Node.js and MongoDB, and is hosted on Render.

## Table of Contents

- [Introduction](#introduction)
- [Base URL](#base-url)
- [Endpoints](#endpoints)
  - [Create a Job Listing](#1-create-a-job-listing)
  - [Get All Job Postings](#2-get-all-job-postings)
  - [Edit a Job Posting](#3-edit-a-job-posting)
  - [Delete a Job Posting](#4-delete-a-job-posting)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Server](#running-the-server)


## Introduction

This is a backend project for managing job listings. It allows users to create, view, edit, and delete job posts. The API is designed to be used by front-end applications or other backend services.

## Base URL

The base URL for the API is: https://jobappbackend-ar29.onrender.com


## Endpoints

### 1. Create a Job Listing

- **Endpoint**: `/job/v1/listing`
- **Method**: `POST`
- **Description**: Creates a new job listing.
- **Request Body**:
  ```json
  {
    "title": "string",
    "description": "string",
    "company": "string",
    "location": "string",
    "salary": "number"
  }

### 2. Get All Job Postings

- **Endpoint**: `/job/v1/posting`
- **Method**: `GET`
- **Description**: Retrieves all job postings.


### 3. Edit a Job Posting

- **Endpoint**: `/job/v1/:id`
- **Method**: `PUT`
- **Description**:  Updates a job posting by ID.


### 4. Delete a Job Posting 

- **Endpoint**: `/job/v1/:id`
- **Method**: `DELETE`
- **Description**: Deletes a job posting by ID.
