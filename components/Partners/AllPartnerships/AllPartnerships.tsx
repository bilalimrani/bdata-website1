import React from "react";
import Image from "next/image";
import partnersConst from "../../../utils/partners.constant";
import BookWrapper from "../../../styles/styledComponents/BookWrapper.style";
const logoImg = require("public/img/favicon.png");

export default function AllPartnerships() {
  return (
    <div className="row">
      {partnersConst?.allPartners?.map(
        (item: any, index) =>
          item?.type === "partner" && (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 py-2">
              <BookWrapper>
                <Image
                  src={logoImg}
                  className="w-100"
                  height="16px"
                  alt="bdata"
                  width="14px"
                />
                <div className="custom-card-body">
                  <div className="card-body-inner-img">
                    <Image
                      src={item.img}
                      className="w-100"
                      height="210px"
                      alt="bdata"
                      width="227px"
                    />
                  </div>
                  <div className="card-title">
                    <p>{item?.subTitle}</p>
                  </div>
                </div>
              </BookWrapper>
            </div>
          )
      )}
    </div>
  );
}
