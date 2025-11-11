import Brand from "@/components/Brand";
import Breadcrumb from "@/components/Breadcrumb";
import Consult from "@/components/Consult";
import FunFact from "@/components/FunFact";
import ServiceGrid from "@/components/services/ServiceGrid";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Breadcrumb name="Services" />
      <ServiceGrid />
      <Consult />
    </div>
  );
};

export default page;
