import { Fragment } from "react";

import Head from "next/head";
import { NextPage } from "next";

import ContactForm from "../../components/contact/ContactForm";

const ContactPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
