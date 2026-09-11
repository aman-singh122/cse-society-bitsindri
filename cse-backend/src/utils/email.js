const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

/* =========================================================
   EMAIL CONFIGURATION
========================================================= */

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ||
  "CSE Society <onboarding@resend.dev>";

const ADMIN_EMAILS = [
  process.env.ADMIN_EMAIL,
  process.env.PERSONAL_ADMIN_EMAIL,
].filter(Boolean);


/* =========================================================
   STUDENT APPLICATION EMAIL
========================================================= */

const sendApplicationEmail = async (application) => {
  const {
    fullName,
    email,
    studentEmail,
    registrationNumber,
    year,
    primaryDomain,
    otherDomain,
    github,
    linkedin,
    portfolio,
  } = application;

  const html = `
    <div style="
      margin:0;
      padding:40px 20px;
      background:#0b0d0e;
      font-family:Arial,Helvetica,sans-serif;
      color:#f2f1ec;
    ">

      <div style="
        max-width:720px;
        margin:0 auto;
        background:#111415;
        border:1px solid #2a2e2f;
      ">

        <!-- HEADER -->

        <div style="
          padding:32px;
          border-bottom:1px solid #2a2e2f;
        ">

          <div style="
            color:#20c997;
            font-size:11px;
            letter-spacing:3px;
            font-weight:bold;
            margin-bottom:14px;
          ">
            CSE SOCIETY / NEW APPLICATION
          </div>

          <h1 style="
            margin:0;
            color:#ffffff;
            font-size:30px;
            line-height:1.15;
          ">
            New Membership Application
          </h1>

          <p style="
            color:#9da29f;
            line-height:1.7;
            margin:14px 0 0;
          ">
            A new student has submitted an application to join
            the CSE Society, BIT Sindri.
          </p>

        </div>


        <!-- STUDENT INFORMATION -->

        <div style="padding:32px;">

          <h3 style="
            color:#20c997;
            font-size:11px;
            letter-spacing:2px;
            margin:0 0 18px;
          ">
            PERSONAL INFORMATION
          </h3>

          <p>
            <strong>Full Name:</strong><br />
            ${fullName}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Student Email:</strong><br />
            ${studentEmail || "Not provided"}
          </p>


          <h3 style="
            color:#20c997;
            font-size:11px;
            letter-spacing:2px;
            margin:34px 0 18px;
          ">
            ACADEMIC INFORMATION
          </h3>

          <p>
            <strong>Registration Number:</strong><br />
            ${registrationNumber}
          </p>

          <p>
            <strong>Year:</strong><br />
            ${year}
          </p>


          <h3 style="
            color:#20c997;
            font-size:11px;
            letter-spacing:2px;
            margin:34px 0 18px;
          ">
            TECHNICAL INTERESTS
          </h3>

          <p>
            <strong>Primary Domain:</strong><br />
            ${primaryDomain}
          </p>

          <p>
            <strong>Other Domain:</strong><br />
            ${otherDomain || "N/A"}
          </p>


          <h3 style="
            color:#20c997;
            font-size:11px;
            letter-spacing:2px;
            margin:34px 0 18px;
          ">
            PROFILE LINKS
          </h3>

          <p>
            <strong>GitHub:</strong><br />
            ${github || "Not provided"}
          </p>

          <p>
            <strong>LinkedIn:</strong><br />
            ${linkedin || "Not provided"}
          </p>

          <p>
            <strong>Portfolio:</strong><br />
            ${portfolio || "Not provided"}
          </p>

        </div>


        <!-- FOOTER -->

        <div style="
          padding:20px 32px;
          border-top:1px solid #2a2e2f;
          color:#777d79;
          font-size:11px;
          letter-spacing:1px;
        ">
          CSE SOCIETY · BIT SINDRI
        </div>

      </div>

    </div>
  `;

  return resend.emails.send({
    from: FROM_EMAIL,

    // Email will be delivered to BOTH addresses
    to: ADMIN_EMAILS,

    subject: `New CSE Society Application — ${fullName}`,

    html,
  });
};


/* =========================================================
   PARTNERSHIP / COLLABORATION EMAIL
========================================================= */

const sendPartnershipEmail = async (partnership) => {
  const {
    organizationName,
    contactPerson,
    workEmail,
    phoneNumber,
    website,
    partnershipType,
    message,
  } = partnership;

  const html = `
    <div style="
      margin:0;
      padding:40px 20px;
      background:#0b0d0e;
      font-family:Arial,Helvetica,sans-serif;
      color:#f2f1ec;
    ">

      <div style="
        max-width:720px;
        margin:0 auto;
        background:#111415;
        border:1px solid #2a2e2f;
      ">

        <!-- HEADER -->

        <div style="
          padding:32px;
          border-bottom:1px solid #2a2e2f;
        ">

          <div style="
            color:#20c997;
            font-size:11px;
            letter-spacing:3px;
            font-weight:bold;
            margin-bottom:14px;
          ">
            CSE SOCIETY / COLLABORATION
          </div>

          <h1 style="
            margin:0;
            color:#ffffff;
            font-size:30px;
            line-height:1.15;
          ">
            New Partnership Request
          </h1>

          <p style="
            color:#9da29f;
            line-height:1.7;
            margin:14px 0 0;
          ">
            A new collaboration or partnership request has
            been submitted through the CSE Society website.
          </p>

        </div>


        <!-- ORGANIZATION -->

        <div style="padding:32px;">

          <h3 style="
            color:#20c997;
            font-size:11px;
            letter-spacing:2px;
            margin:0 0 18px;
          ">
            ORGANIZATION
          </h3>

          <p>
            <strong>Organization / Company:</strong><br />
            ${organizationName}
          </p>

          <p>
            <strong>Contact Person:</strong><br />
            ${contactPerson}
          </p>


          <!-- CONTACT -->

          <h3 style="
            color:#20c997;
            font-size:11px;
            letter-spacing:2px;
            margin:34px 0 18px;
          ">
            CONTACT
          </h3>

          <p>
            <strong>Work Email:</strong><br />
            ${workEmail}
          </p>

          <p>
            <strong>Phone:</strong><br />
            ${phoneNumber || "Not provided"}
          </p>

          <p>
            <strong>Website:</strong><br />
            ${website || "Not provided"}
          </p>


          <!-- PARTNERSHIP -->

          <h3 style="
            color:#20c997;
            font-size:11px;
            letter-spacing:2px;
            margin:34px 0 18px;
          ">
            PARTNERSHIP
          </h3>

          <p>
            <strong>Partnership Type:</strong><br />
            ${partnershipType}
          </p>


          <!-- MESSAGE -->

          <h3 style="
            color:#20c997;
            font-size:11px;
            letter-spacing:2px;
            margin:34px 0 18px;
          ">
            OPPORTUNITY DETAILS
          </h3>

          <div style="
            padding:20px;
            background:#0b0d0e;
            border:1px solid #292d2e;
            color:#c4c8c5;
            line-height:1.8;
            white-space:pre-wrap;
          ">
            ${message}
          </div>

        </div>


        <!-- FOOTER -->

        <div style="
          padding:20px 32px;
          border-top:1px solid #2a2e2f;
          color:#777d79;
          font-size:11px;
          letter-spacing:1px;
        ">
          CSE SOCIETY · BIT SINDRI
        </div>

      </div>

    </div>
  `;

  return resend.emails.send({
    from: FROM_EMAIL,

    // Email will be delivered to BOTH addresses
    to: ADMIN_EMAILS,

    // If you reply to the email, it goes to the organization
    replyTo: workEmail,

    subject: `Partnership Request — ${organizationName}`,

    html,
  });
};


/* =========================================================
   EXPORTS
========================================================= */

module.exports = {
  sendApplicationEmail,
  sendPartnershipEmail,
};