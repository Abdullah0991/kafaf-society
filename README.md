# Kafaf society website + admin dashboard

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Admin dashboard is created using `react-admin`.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment variables:
You need to create a `.env` file with these params:
```
# mysql database uri
DATABASE_URL="mysql://localhost:3306/kafaf"
NEXT_PUBLIC_API_URL=/api
# admin dashboard username
NEXT_PUBLIC_ADMIN_USER=admin
# admin dashboard password
NEXT_PUBLIC_ADMIN_PASS=admin
# url for a youtube video used as an intro video in the landing page  
NEXT_PUBLIC_PROMO_URL=https://youtu.be/SNYOd4q_EXw
# url for a whatsapp contact used as a donate url
NEXT_PUBLIC_DONATE_LINK=https://wa.me/message/TLOSR7YLWFQGJ1
```
