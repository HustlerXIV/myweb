import React, { useState } from "react";
import styled from "styled-components";
import DescWithIcon from "@components/Form/DescWithIcon";
import InputForm from "@components/Form/InputForm";
import InputTextArea from "@components/Form/InputTextArea";
import { BsTelephoneForward } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BlueButton, TransButton } from "@components/style";
import axios from "axios";

const MyInfoData = [
  {
    title: "(+66) 63-198-7380",
    icon: <BsTelephoneForward />,
    href: "tel:063-198-7380",
  },
  {
    title: "napat.jaiyim@hotmail.com",
    icon: <HiOutlineMail />,
    href: "mailto:napat.jaiyim@hotmail.com",
  },
  {
    title: "Napat Jaiyim",
    icon: <AiOutlineLinkedin />,
    href: "https://www.linkedin.com/in/napat-jaiyim-538249195/",
  },
];

export default function ContactFormModule() {
  const resetFormData = {
    firstname: null,
    lastname: null,
    email: null,
    subject: null,
    msg: null,
  };
  const [formData, setFormData] = useState(resetFormData);
  const handleFormData = (value) => {
    setFormData({
      ...formData,
      ...value,
    });
  };

  console.log("formData", formData);
  const SendMsgLineApi = () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer PBAtXC74RpLqdzS4B2mPd1jjCQmShLZG9uWwrphPRma`,
        },
        url: `https://notify-api.line.me/api/notify`,
        message: `Name: ${formData.firstname} ${formData.lastname} ${(<br />)} 
        Email: ${formData.email} ${(<br />)}
        Subject: ${formData.subject} ${(<br />)}
        Msg: ${formData.msg}`,
      };
      const callApi = axios(options);
      return callApi;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      data-aos="fade-up"
      className="container mx-auto max-w-7xl px-6 sm:px-6 lg:px-8"
    >
      <Card>
        <Left>
          <Title className="text-white">CONTACT ME</Title>
          <CardInfo>
            {MyInfoData.map((item, index) => (
              <DescWithIcon
                href={item.href}
                key={index}
                title={item.title}
                icon={item.icon}
                className="text-white"
              />
            ))}
          </CardInfo>
        </Left>
        <Right>
          <HalfContainer column="column">
            <InputForm
              id="firstname"
              name="firstname"
              label="First name"
              setForm={(value) => {
                handleFormData({ firstname: value });
              }}
            />
            <InputForm
              id="lastname"
              name="lastname"
              label="Last name"
              setForm={(value) => {
                handleFormData({ lastname: value });
              }}
            />
          </HalfContainer>
          <InputForm
            id="email"
            name="email"
            label="Email"
            type="email"
            setForm={(value) => {
              handleFormData({ email: value });
            }}
          />
          <InputForm
            id="subject"
            name="subject"
            label="Subject"
            setForm={(value) => {
              handleFormData({ subject: value });
            }}
          />
          <InputTextArea
            id="msg"
            name="msg"
            label="Message"
            setForm={(value) => {
              handleFormData({ msg: value });
            }}
          />
          <HalfContainer style={{ marginTop: "10px" }}>
            <BlueButton type="submit" onClick={SendMsgLineApi}>
              SEND
            </BlueButton>
            <TransButton>CLEAR</TransButton>
          </HalfContainer>
        </Right>
      </Card>
    </div>
  );
}

const Card = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0px auto;
  height: auto;
  padding: 60px;
  border: 3px solid #0078ae;
  border-radius: 10px;
  display: flex;
  box-shadow: inset 0 0 20px #0078ae;
  gap: 10px;

  background-image: url("/contact-me.png");
  background-repeat: no-repeat;
  background-size: 45%;
  background-position: -10% 120%;

  @media (max-width: 1024px) {
    padding: 30px;
  }

  @media (max-width: 576px) {
    padding: 20px;
    flex-direction: column;
    background-image: none;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Left = styled.div`
  width: 40%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const HalfContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 900px) {
    flex-direction: ${(p) => p.column};
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const CardInfo = styled.div`
  padding: 10px;
`;
