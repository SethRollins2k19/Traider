import React from 'react';
import { AbstractPage } from '../../abstract/AbstractPage';
import { Header } from '../Header';


export class MainPage extends AbstractPage {
    customRender() {
        return (
            <>
                <Header/>
            </>
        );
    }
}