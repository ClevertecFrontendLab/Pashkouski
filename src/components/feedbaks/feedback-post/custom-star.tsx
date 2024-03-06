import {StarFilled, StarOutlined} from "@ant-design/icons";

type CustomStarType = {
    value: number | undefined
    index: number | undefined
}

export const CustomStar = ({index = 0, value = 0} : CustomStarType) => {
    return (index > value) ? <StarOutlined style={{color: '#FAAD14'}}/> : <StarFilled style={{color: '#FAAD14'}}/>
};
