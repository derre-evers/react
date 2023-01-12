function Label() {
    var labelStyle = {
        fontFamily: "Verdana",
        color: "#FFF",
        fontSize : 30
    };

}

function Button() {
    var buttonStyle = {
        fontFamily: "Verdana",
        fontSize: 20,
        margin: 5,
        fontWeight: "bold",
        backgroundColor: "#CCCCCC",
        color: "#FFF",
        borderStyle: "solid",
        borderColor: "#CCCCCC",
        borderRadius: 5,
        width: 70,
        height: 70
    };

}

export default function Calculator() {
        var backgroundStyle = {
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: "#00ace6",
            width: 260,
            borderRadius: 10,
            textAlign: "left"
        };

        return (
            <div style={backgroundStyle}>

            </div>
        );
}