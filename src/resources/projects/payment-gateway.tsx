import React from 'react';
import {Project} from '../../base/Project';

export class PaymentGateway extends React.Component<any, any> {

 render() {
  return <Project name='payment-gateway'
                  title='Payment Gateway'
                  description={<span>
                   Electron University - (University Education Management system)
                   Skills used: Java, Spring, Spring Security, GWT, GXT, EXTJS, IText, phantomjs, postgresql
                   Period: March 2014 - Dec. 2014
                  </span>}
  />;
 }

}
