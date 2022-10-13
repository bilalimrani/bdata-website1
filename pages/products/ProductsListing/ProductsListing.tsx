import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  ProuctListing,
  Button,
  InfoArea,
  ContainerDefault,
} from "../../../styles/styledComponents/ProductListing.style";
import productConstants from "../../../utils/products.constants";

const product2 = require("public/img/product2.svg");
const Product1 = require("public/img/product1.svg");

export default function LightWeightSection() {
  const router = useRouter();

  return (
    <ProuctListing>
      <InfoArea>
        <div className="container">
          <div className="row my-lg-5">
            <div className="col-12 col-lg-6 col-xl-5 order-lg-2 py-2">
              <Image
                className="img w-100 max-image-content"
                alt="bdata"
                src={Product1}
                width={100}
                height={70}
                layout="responsive"
                priority
              />
            </div>
            <div className="col-12  col-lg-6 col-xl-7 py-2 order-lg-1">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  {productConstants.products.section1.title}
                </h3>
                <p className="custom-padding m-0">
                  {productConstants.products.section1.subTitle}
                </p>

                <Button
                  onClick={() =>
                    router.push("/products/ProductsListing/ProductDetailsHub")
                  }
                  className="btn btn-primary"
                >
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
          <div className="row my-lg-5">
            <div className="col-12 col-lg-6 col-xl-5 py-2">
              <Image
                className="img w-100 max-image-content"
                alt="bdata"
                src={product2}
                width={100}
                height={70}
                layout="responsive"
                priority
              />
            </div>
            <div className="col-12  col-lg-6 col-xl-7 py-2">
              <ContainerDefault>
                <h3 className="text-left m-0 custom-padding fw-bold">
                  {productConstants.products.section2.title}
                </h3>
                <p className="custom-padding m-0">
                  {productConstants.products.section2.subTitle}
                </p>
                <Button
                  onClick={() =>
                    router.push(
                      "/products/ProductsListing/ProductDetailsFingerPrint"
                    )
                  }
                  className="btn btn-primary"
                >
                  Read More
                </Button>
              </ContainerDefault>
            </div>
          </div>
        </div>
      </InfoArea>
    </ProuctListing>
  );
}
