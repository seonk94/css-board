
import React from 'react';
import { Grid, Card } from 'semantic-ui-react'

function PreviewCard() {
    return (
        <Grid.Column>
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        Card Title
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    짧은 설명
                </Card.Content>
            </Card>
        </Grid.Column>
    );
}

export default PreviewCard;
