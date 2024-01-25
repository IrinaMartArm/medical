import React from "react";
import { S } from "./_CatalogStyles";


type WorkPropsType = {
    image: string
    title: string
    text: string
}

export const Item: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (  
        <S.Item>
            <S.ImgBox>
                <S.Image src={props.image} alt="work"/>
            </S.ImgBox>
            {/*<S.ItemTitle>*/}
                <S.Title>{props.title}</S.Title>
                {/*<S.Text>{props.text}</S.Text>*/}
                {/*<S.Button>Demo</S.Button>*/}
            {/*</S.ItemTitle>*/}
        </S.Item>
    );
}

