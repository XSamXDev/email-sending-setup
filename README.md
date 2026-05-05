# Email Sending Setup

A simple Node.js project to send emails using **Nodemailer** with Gmail's SMTP service.

## Features

- Connects to Gmail via SMTP using an app password
- Verifies the SMTP connection before sending
- Sends emails with plain text, HTML body, and file attachments
- Uses environment variables to keep credentials secure

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- A Gmail account with [2-Factor Authentication](https://myaccount.google.com/signinoptions/two-step-verification) enabled
- A Gmail [App Password](https://support.google.com/accounts/answer/185833) generated for this application

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/XSamXDev/email-sending-setup.git
   cd email-sending-setup
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on the provided sample:
   ```bash
   cp .env.sample .env
   ```

4. Fill in your credentials in the `.env` file:
   ```
   USER=your-gmail-address@gmail.com
   PASS=your-app-password
   to=recipient@example.com
   ```

## Usage

Run the script to verify the SMTP connection and send a test email:

```bash
node index.js
```

On success you will see:

```
Server is ready to take our messages
Message sent: <message-id>
```

## Environment Variables

| Variable | Description                                      |
|----------|--------------------------------------------------|
| `USER`   | Your Gmail address used as the sender            |
| `PASS`   | Gmail App Password (generated via 2FA settings)  |
| `to`     | Recipient email address                          |

## Dependencies

| Package       | Purpose                          |
|---------------|----------------------------------|
| `nodemailer`  | Sending emails via SMTP          |
| `dotenv`      | Loading environment variables    |

## License

ISC
