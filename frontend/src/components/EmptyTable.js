import Card from 'react-bootstrap/Card';

function EmptyTable(message){
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <Card style = {{ width: '40em'}}>
                <Card.Body>
                    <Card.Title className="mb-3">
                        {message}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Please Make an Entry</Card.Subtitle>
                    <Card.Text>
                    No Records are being displayed because our table is empty.
                    Please create a new entry.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default EmptyTable;