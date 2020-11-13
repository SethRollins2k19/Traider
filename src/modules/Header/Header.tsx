import React, { FC } from 'react';
import { ContentContainers } from '../../common/containers/contentContainers';
import { Menu } from '../menu/Menu';


const Header: FC = props => {
    return (
        <header>
            <ContentContainers>
                <Menu/>
            </ContentContainers>
        </header>
    );
};

export {
    Header,
};