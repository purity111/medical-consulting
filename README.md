# Hayat Hospital Management System

### Background

Today’s medical diagnoses are a critical part of our patient experience, problems related to getting a
diagnosis from multiple hospitals are documented as diagnosis history, for example, currently if a patient
moves from one hospital to another, they need to describe the whole problem they are facing again to the
new doctor while showing the radiological image and orally speak out what previous doctors diagnoses
where. Furthermore, privacy breaches happen when an unauthorized entity accesses the printed or digital
patient diagnosis of radiological images resulting in a risk of patient data misuse or exploitation.

### Aim

Our project aims to revolutionize healthcare by creating a hospital management system that will implement
techniques to securely incorporate patient medical records with radiological images. This will allow for
integration between radiological images and patient records along with the ability to track medical
diagnoses easily, with the goal of creating a secure and comprehensive healthcare system that facilitates
better patient monitoring and diagnosis, ultimately creating a more efficient and secure hospital
management system.

### High level system architecture

![img.png](./public/images/img.jpg)

## Technology Stack

1. **Frontend**:
   - **React**: For building the interactive and dynamic user interface.
   - **TailwindCSS**: For responsive and customizable UI styling.
2. **Backend**:
   - **Node.js** and **Nest.js**: For creating the backend RESTful API and server-side logic.
   - **MongoDB**: A NoSQL database to store user information, medical records, and other system data.
   - **Mongoose**: An ODM (Object Data Modeling) library to interact with MongoDB.
3. **Real-time Communication**:
   - **Socket.io**: Used to implement an Online/Offline feature for doctors. Doctors can be considered Online if available for consultations or Offline if unavailable (during consultations or logged out).
   - **WebRTC & PeerJS**: For enabling video consultations. WebRTC handles the media transfer, while PeerJS is used for establishing peer-to-peer connections.

## API Documentation

### API Base URL:

[https://harmore.herokuapp.com](https://harmore.herokuapp.com)

### Routes:

#### **Patient Routes (Requires JWT Token)**

| Endpoint              | Method | Action              | Access Level                  |
| --------------------- | ------ | ------------------- | ----------------------------- |
| `/api/v1/patient`     | GET    | Get all patients    | Doctor, Staff                 |
| `/api/v1/patient/:id` | GET    | Get patient by ID   | Doctor, Staff, Patient (self) |
| `/api/v1/patient`     | POST   | Add new patient     | Staff                         |
| `/api/v1/patient/:id` | PUT    | Update patient info | Patient (self)                |
| `/api/v1/patient/:id` | DELETE | Delete patient      | Staff                         |

#### **Doctor Routes (Requires JWT Token)**

| Endpoint             | Method | Action             | Access Level                  |
| -------------------- | ------ | ------------------ | ----------------------------- |
| `/api/v1/doctor`     | GET    | Get all doctors    | Patient, Staff                |
| `/api/v1/doctor/:id` | GET    | Get doctor by ID   | Patient, Staff, Doctor (self) |
| `/api/v1/doctor`     | POST   | Add a new doctor   | Staff                         |
| `/api/v1/doctor/:id` | PUT    | Update doctor info | Doctor (self)                 |
| `/api/v1/doctor/:id` | DELETE | Delete doctor      | Staff                         |

#### **Staff Routes (Requires JWT Token)**

| Endpoint            | Method | Action            | Access Level |
| ------------------- | ------ | ----------------- | ------------ |
| `/api/v1/staff`     | GET    | Get all staff     | Staff        |
| `/api/v1/staff/:id` | GET    | Get staff by ID   | Staff        |
| `/api/v1/staff`     | POST   | Add a new staff   | Staff        |
| `/api/v1/staff/:id` | PUT    | Update staff info | Staff        |
| `/api/v1/staff/:id` | DELETE | Delete staff      | Staff        |

#### **Medical Record Routes (Requires JWT Token)**

| Endpoint                    | Method | Action           | Access Level    |
| --------------------------- | ------ | ---------------- | --------------- |
| `/api/v1/medicalRecord`     | GET    | Get all records  | Patient, Doctor |
| `/api/v1/medicalRecord/:id` | GET    | Get record by ID | Patient, Doctor |
| `/api/v1/medicalRecord`     | POST   | Add new record   | Doctor          |
| `/api/v1/medicalRecord/:id` | PUT    | Update record    | Doctor          |
| `/api/v1/medicalRecord/:id` | DELETE | Delete record    | Doctor          |

#### **Specialization Routes (Requires JWT Token)**

| Endpoint                     | Method | Action                   | Access Level           |
| ---------------------------- | ------ | ------------------------ | ---------------------- |
| `/api/v1/specialization`     | GET    | Get all specializations  | Patient, Doctor, Staff |
| `/api/v1/specialization/:id` | GET    | Get specialization by ID | Patient, Staff         |
| `/api/v1/specialization`     | POST   | Add a new specialization | Staff                  |
| `/api/v1/specialization/:id` | PUT    | Update specialization    | Staff                  |
| `/api/v1/specialization/:id` | DELETE | Delete specialization    | Staff                  |

#### **Authentication Routes (No JWT Token Needed)**

| Endpoint                   | Method | Action               | Access Level       |
| -------------------------- | ------ | -------------------- | ------------------ |
| `/api/v1/patient/login`    | POST   | Login (Generate JWT) | Registered Patient |
| `/api/v1/patient/register` | POST   | Register new patient | All users          |
| `/api/v1/doctor/login`     | POST   | Login (Generate JWT) | Doctor             |
| `/api/v1/staff/login`      | POST   | Login (Generate JWT) | Staff              |
