export default function NewsItem() {
    var cardStyle = {
        height: 500
    };

    return (
        <div className="card" style={cardStyle}>
            <div className="card-divider">
                TITLE
            </div>
            <a href="URL TO WEBSITE NEW YORK TIMES" target="_blank" rel="noreferrer">
                <img src="IMAGE" alt="TITLE" />
            </a>
            <div className="card-section">
                <p>ABSTRACT</p>
            </div>
        </div>
    );
};
