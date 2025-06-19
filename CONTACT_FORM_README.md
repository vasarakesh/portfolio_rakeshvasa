# Contact Form Integration

## Overview

The contact form has been successfully refactored and integrated into the portfolio codebase. It provides a modern, user-friendly interface for visitors to get in touch.

## Features

### ✅ Current Implementation
- **Form Validation**: Real-time validation with error messages
- **Responsive Design**: Works on all device sizes
- **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation
- **Loading States**: Visual feedback during form submission
- **Error Handling**: Graceful error handling with user-friendly messages
- **Animation**: Smooth animations using Framer Motion

### 📧 Email Integration
- **Mailto Fallback**: Opens user's default email client with pre-filled message
- **API Route Ready**: `/api/contact` endpoint for backend integration
- **Extensible**: Easy to integrate with email services

## File Structure

```
src/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Contact page component
│   └── api/
│       └── contact/
│           └── route.ts      # API endpoint for form submission
├── components/
│   ├── ContactForm.tsx       # Reusable contact form component
│   ├── Navbar.tsx           # Navigation with contact link
│   └── Footer.tsx           # Footer component
└── app/
    └── layout.tsx           # Root layout with navigation
```

## Usage

### Basic Usage (Mailto)
```tsx
import ContactForm from '@/components/ContactForm';

// Uses mailto fallback by default
<ContactForm />
```

### With API Integration
```tsx
import ContactForm from '@/components/ContactForm';

// Uses the API route for form submission
<ContactForm useApi={true} />
```

### Custom Handler
```tsx
import ContactForm from '@/components/ContactForm';

const handleSubmit = async (data) => {
  // Custom form submission logic
  await sendEmail(data);
};

<ContactForm onSubmit={handleSubmit} />
```

## API Integration

The contact form includes a ready-to-use API route at `/api/contact` that:

- Validates form data
- Logs submissions (for development)
- Returns appropriate HTTP status codes
- Is ready for email service integration

### Adding Email Service

To integrate with an email service, update the API route:

```typescript
// In src/app/api/contact/route.ts

// Example with SendGrid
import sgMail from '@sendgrid/mail';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Send email using SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    await sgMail.send({
      to: 'vasarakesh1290@gmail.com',
      from: 'noreply@yourdomain.com',
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
```

## Popular Email Services

### 1. SendGrid
```bash
npm install @sendgrid/mail
```

### 2. Nodemailer
```bash
npm install nodemailer
```

### 3. Resend
```bash
npm install resend
```

### 4. AWS SES
```bash
npm install @aws-sdk/client-ses
```

## Environment Variables

Add these to your `.env.local` file when integrating email services:

```env
# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key

# Resend
RESEND_API_KEY=your_resend_api_key

# AWS SES
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
```

## Testing

### Development
1. Start the development server: `npm run dev`
2. Navigate to `/contact`
3. Test form validation and submission
4. Check browser console for API logs

### Production
1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Test the contact form functionality

## Customization

### Styling
The contact form uses Tailwind CSS classes and can be customized by modifying the `ContactForm.tsx` component.

### Form Fields
Add or modify form fields by updating the `FormData` interface and form JSX in `ContactForm.tsx`.

### Validation
Customize validation rules in the `validateForm` function within `ContactForm.tsx`.

## Security Considerations

- ✅ Input validation on both client and server
- ✅ CSRF protection (built into Next.js)
- ✅ Rate limiting (recommended for production)
- ✅ Environment variable protection
- ✅ Error handling without exposing sensitive data

## Next Steps

1. **Choose an email service** based on your needs
2. **Set up environment variables** for the chosen service
3. **Update the API route** with your email service integration
4. **Test thoroughly** in development and production
5. **Consider adding rate limiting** for production use
6. **Set up monitoring** for form submissions

## Support

The contact form is now fully integrated and ready for use. The mailto fallback ensures it works immediately, while the API route provides a foundation for more advanced email integration. 