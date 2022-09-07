import React from "react";
//import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
//import Comments from "../components/Comments";
import Card from "../components/Card";

const Video = () => {
return (
    <div className="flex gap-[24px]">
      <div className="f5">
        <div>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h2>Test Video</h2>
        <div>
          <info>7,948,154 views • Jun 22, 2022</info>
          <div>
            <button>
              <ThumbUpOutlinedIcon /> 123
            </button>
            <button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </button>
            <button>
              <ReplyOutlinedIcon /> Share
            </button>
            <button>
              <AddTaskOutlinedIcon /> Save
            </button>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <img alt="pic" src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
            <div>
              <p>Lama Dev</p>
              <p>200K subscribers</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit aliquam
                at. Vitae facere ipsum totam ratione exercitationem. Suscipit
                animi accusantium dolores ipsam ut.
              </p>
            </div>
          </div>
          <subscribe>SUBSCRIBE</subscribe>
        </div>
        <hr />
        <div/>
      </div>
      <div>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </div>
    </div>
  );
};

export default Video;