import { Fragment } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <Fragment>
      <h1>masikoldal</h1>
      <div style={{backgroundColor: "green"}}>
        <Image
          src="https://www.wwe.com/f/styles/wwe_1_1_540/public/rd-talent/Profile/Roman_Reigns_pro.png"
          width="540"
          height="640"
          layout="responsive"
        />
      </div>
    </Fragment>
  );
}
