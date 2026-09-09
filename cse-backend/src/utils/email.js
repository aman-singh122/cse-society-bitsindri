const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendApplicationEmail = async (application) => {
  const {
    fullName,
    email,
    studentEmail,
    registrationNumber,
    year,
    domain,
    otherDomain,
    profileUrl,
  } = application;

  const { data, error } = await resend.emails.send({
    from: "CSE Society <onboarding@resend.dev>",
    to: [process.env.ADMIN_EMAIL],
    subject: `New CSE Society Application — ${fullName}`,

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New CSE Society Application</h2>

        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Student Email:</strong> ${
          studentEmail || "Not provided"
        }</p>
        <p><strong>Registration Number:</strong> ${registrationNumber}</p>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Primary Domain:</strong> ${domain}</p>
        <p><strong>Other Domain:</strong> ${
          otherDomain || "Not provided"
        }</p>
        <p><strong>GitHub / LinkedIn / Portfolio:</strong> ${
          profileUrl || "Not provided"
        }</p>

        <hr />

        <p>This application was submitted through the CSE Society website.</p>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

module.exports = {
  sendApplicationEmail,
};