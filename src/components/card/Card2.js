import React from "react";
import styled, { css } from "styled-components";

// cach này ít khai báo hơn.
const StyledCard = styled.div`
  position: relative;
  width: 400px;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
  }
`;

// const CardImage = styled.div`
//   height: 400px;
//   width: 100%;
//   border-radius: 8px;
// `;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  width: 83%;
  left: 50%;
  transform: translate(-50%, 50%);
  bottom: 0;
  background-color: white;
  z-index: 10;
  padding: 20px;
  border-radius: 20px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.blue};
`;

const CardAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #7d6aff 11.38%, #ffb86c 4.35%);
    `};
  ${(props) =>
    !props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;
const Card2 = (props) => {
  return (
    <StyledCard>
      <div className="card-image">
        <CardImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/16378193/media/e9ad5ebe9dd6822be9ee622c7465d9e5.png?compress=1&resize=400x300&vertical=top"
          alt=""
        />
      </div>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU"
              alt=""
            />
            <UserName>Nhan map</UserName>
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <CardTitle>cosmic perspective</CardTitle>
          <CardAmount secondary={props.secondary}> 12,000 PSL</CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card2;
