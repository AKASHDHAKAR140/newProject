import React from "react";
import "../Component/All.css";
import Footer from "../Component/Footer";
import { useParams } from "react-router-dom";

function BlogsContent() {
  const {id} = useParams()
  console.log(id)

  

  return (
    <div>
      <div className="image-12">
        <h1 className="head1" style={{ paddingTop: 50 }}>
          OUR BLOGS
        </h1>
      </div>
      <div className="box-blog">
        <div className="d-flex">
          <div className="card-m12">
            <img
              style={{ height: 220, width: 297 }}
              src="https://img.freepik.com/free-vector/lottery-tickets-balls-flying-golden-coins-gambling-business-advertising_1262-13075.jpg?w=360"
            />
            <h4>
              Future trends and developments in the online lottery industry for
              2023-24
            </h4>
            <p>
              You must have seen people buying lottery tickets and winning
              prizes. The pandemic resulted in the sudden rise of lottery
              software. The online lottery industry is a growing industry in the
              world of gaming. This industry offers people a lot of attractions
              like creating lotteries, managing ticket sales, winning exciting
              prizes, and so much more. Due to this, we are noticing a surge in
              this sector.
            </p>
          </div>
        </div>
      </div>
      <div style={{}}></div>
      <Footer />
    </div>
  );
}

export default BlogsContent;
