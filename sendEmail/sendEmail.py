import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Email configuration for Outlook
outlook_server = "smtp-mail.outlook.com"
outlook_port = 587
sender_email = "HONGYU.21@ichat.sp.edu.sg"
sender_password = ""
# receiver_email = "QIU_Zixuan@SP.EDU.SG"
receiver_email = "LEONGANDY.22@ichat.sp.edu.sg"
subject = "SEED Newsletter #1"
cc_recipients = ["HONGYU.21@ichat.sp.edu.sg", "YANHEIN.22@ichat.sp.edu.sg", "KARLOK42.21@ichat.sp.edu.sg", "ASHLEYTEO.22@ichat.sp.edu.sg", "JOVANTAN.23@ichat.sp.edu.sg", "AWEQ09.23@ichat.sp.edu.sg"]
# bcc_receiver = []

# Read the HTML template
with open("template.html", "r", encoding="utf-8") as template_file:
    email_template = template_file.read()

# Create an email message
message = MIMEMultipart()
message["From"] = sender_email
message["To"] = receiver_email
message["Subject"] = subject

# Attach the HTML content to the email
message.attach(MIMEText(email_template, "html"))

# message['Cc'] = ', '.join(cc_recipients)

# Connect to the Outlook SMTP server and send the email
try:
    server = smtplib.SMTP(outlook_server, outlook_port)
    server.starttls()
    server.login(sender_email, sender_password)
    server.sendmail(sender_email, receiver_email, message.as_string())
    server.quit()
    print("Email sent successfully!")
except Exception as e:
    print("Email sending failed:", e)