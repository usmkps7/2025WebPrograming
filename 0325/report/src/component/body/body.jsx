import React from "react";
import spongebob from "../../image/spongebob.png";
import Button from "../button/button";

const styles = {
    divSt: {
        margin: "10px",
        width: "100%",
        textAlign: "center",
    },
    img: {
        width: "100px",
        height: "auto",
    }
};

function Body(){
    return(
        <div style={styles.divSt}>
            <img src={spongebob} alt="spongebob" />
            <p>안녕하세요 저는 경성대학교에 재학중인 소프트웨어학과 20학번 신성우라고 합니다!!
                밑에 버튼을 눌려보세요!
            </p>
            <Button name = {"클릭"} />
        </div>
    );
}

export default Body;