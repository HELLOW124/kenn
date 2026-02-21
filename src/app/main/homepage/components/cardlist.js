import ImageCard from "../../../../components/ui/card";


export default function CardList() {
  return (
    <div style={containerStyle}>
      <ImageCard
        image="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1712637652_3PcsChickenJoy.jpg"
        title="Jollibee"
        description="Crispy and Juicy."
        />

      <ImageCard
        image="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1712637652_3PcsChickenJoy.jpg"
        title="Jollibee"
        description="Crispy and Juicy."
        />

    
      <ImageCard
        image="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1712637652_3PcsChickenJoy.jpg"
        title="Jollibee"
        description="Crispy and Juicy."
        />


    </div>
  );
}

const containerStyle = {
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "40px",
};
