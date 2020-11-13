import React, { FC } from 'react';
import s from './style.module.sass';
import { classNameArrayToString } from '../../utils/_';

interface ContentContainersModel {
    classNames?: string[];
}

const ContentContainers: FC<ContentContainersModel> = ({ children, classNames = [] }) => {
    return (
        <div className={classNameArrayToString([...classNames, s.contentContainer])}>
            {children}
        </div>
    );
};

export {
    ContentContainers,
};