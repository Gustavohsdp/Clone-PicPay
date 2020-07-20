import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
    Header,
    Container,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel

} from './styles';

import avatar from '../../images/avatar.png';


export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar Source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou o <Bold>@gustavohsdp</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Gustavo Henrique</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 300,00</Value>

                        <Divider />

                        <Feather name="lock" color= "#fff" size={14} />
                        <Date>há 2 anos </Date>
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size= {14} color= "#fff" />
                        </Option>
                        <OptionLabel>0</OptionLabel>

                        <Option>
                            <AntDesign name="hearto" size= {14} color= "#fff" />
                        </Option>
                        <OptionLabel>0</OptionLabel>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}
