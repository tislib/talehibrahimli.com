import React from "react";

import * as resources from "../resources";
import { getResources } from "../services/resources-service";
import { ProjectParams } from "../base/Project";
import "./resume.scss";

const projects: ProjectParams[] = getResources(resources.projects);

// console.log(resources.projects);
console.log(projects.map((item) => item));

const ResumeProject = (props: ProjectParams) => {
  return (
    <>
      <p className="c1">
        <span className="c7">&nbsp; &nbsp; &nbsp;{props.title} </span>
        {props.shortDeskForResume && (
          <span className="c6"> - ({props.shortDeskForResume})</span>
        )}
        {props.link && (
          <span>
            <span>(</span>
            <span className="c14">
              <a className="c0" href={props.link}>
                {props.link}
              </a>
            </span>
            <span className="c6">
              )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
        )}
      </p>
      <p className="c1 c4">
        <span className="c6">Skills used: {props.skillsUsed}</span>
      </p>
      {props.period && (
        <p className="c1 c4">
          <span>Period: {props.period}</span>
        </p>
      )}
    </>
  );
};

export const Resume = () => {
  return (
    <div className="resume-root">
      <div className="c30">
        <div>
          <p className="c21">
            <span className="c6" />
          </p>
        </div>
        <p className="c12">
          <span className="c2">Taleh Ibrahimli</span>
        </p>
        <p className="c18 c27">
          <span className="c5">&nbsp;</span>
        </p>
        <p className="c18">
          <span className="c5">&nbsp;</span>
        </p>
        <p className="c8">
          <span>+994515957491</span>
          <span>&nbsp;&diams; talehsmail@gmail.com </span>
          <span className="c6">&nbsp;</span>
        </p>
        <h1 className="c3" id="h.vkijw74gvcpd">
          <span className="c17 c13 c7">Professional Summary</span>
        </h1>
        <p className="c25">
          <span>
            Experienced Software Architect with a 8 years of demonstrated
            history of working in the enterprise applications. Willing to learn
            new technologies. Strong software architect with a Bachelor&#39;s
            degree focused in Computer Science from Baku State University.
          </span>
        </p>
        <h1 className="c3" id="h.f4hs62bq9js3">
          <span className="c13 c7 c17">SKILLS</span>
        </h1>
        <p className="c1">
          <span className="c6">Java (Main skills)</span>
        </p>
        <ul className="c10 lst-kix_zg3p8uoe8fdv-0 start">
          <li className="c1 c9 c4">
            <span className="c6">
              Spring Framework: spring boot, spring data, spring mvc, spring
              reactive(webflux)
            </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">
              JVM: memory analysis, JVM internals, Java assembly, AOP,
              Reflection, ClassLoader, JNI
            </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">
              Long polling, Push notifications, WebSocket, etc.
            </span>
          </li>
          <li className="c1 c9 c4">
            <span>M</span>
            <span className="c6">
              essage queue systems: ActiveMQ, RabbitMQ, Apache Kafka, &nbsp;etc.
            </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">Java Frontend: GWT, GXT, VAADIN</span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">
              Security: Spring Security, Apache Shiro, LDAP, RBAC, &nbsp;Owasp
              antisamy
            </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">
              Test Driven development, Unit testing, Integration testing
            </span>
          </li>
          <li className="c1 c4 c9">
            <span className="c6">
              Rest API documentation, mocking, etc. Swagger, dredd, swagger-mock
            </span>
          </li>
        </ul>
        <p className="c1">
          <span className="c6">Cloud &amp; DevOps</span>
        </p>
        <ul className="c10 lst-kix_pts9osyyr6t5-0 start">
          <li className="c1 c9 c4">
            <span className="c6">
              AWS: S3, EC2, ECS, RDS(Aurora), Dynamodb, Neptune, EKS, ELB
            </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">Docker, Kubernates</span>
          </li>
          <li className="c1 c9 c4">
            <span>Terraform, datadoghq, Puppet, Sysdig, Grafana, influxdb</span>
          </li>
        </ul>
        <ul className="c10 lst-kix_dozn1kjrepgv-0 start">
          <li className="c1 c9 c4">
            <span className="c6">
              Building CI/CD, static code analysis with SonarQube, etc.
            </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">
              Disturped systems: Hadoop, Apache spark, HDFS, MapReduce, etc.
            </span>
          </li>
        </ul>
        <p className="c1">
          <span className="c6">Software Designing &amp; Architecture</span>
        </p>
        <ul className="c10 lst-kix_d3e76f9xvpfx-0 start">
          <li className="c1 c9 c4">
            <span className="c6">
              Strong skills on Design patterns and architectures
            </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">SOA, EDA, Microservices architectures</span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">
              Designing reactive systems, live updated operations
            </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">CDN(MaxCDN), Load balancing(nginx)</span>
          </li>
        </ul>
        <p className="c1">
          <span className="c6">Security &amp; Cryptography</span>
        </p>
        <ul className="c10 lst-kix_dozn1kjrepgv-0">
          <li className="c1 c9 c4">
            <span className="c6">
              Strong skills on AES, RSA implementations, Hash, MAC, HMAC, OTP
              algorithms
            </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">
              Web Security: XSS, Injection, CSRF, OWASP Top 10.
            </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">
              JWT token, oauth, stateless authentication design
            </span>
          </li>
        </ul>
        <p className="c1">
          <span className="c6">Other</span>
        </p>
        <ul className="c10 lst-kix_qxzt34iyjy91-0 start">
          <li className="c1 c9 c4">
            <span className="c6">
              Postgresql (strong skills), mysql, oracle, sqLite,
              Postgresql-Jsonb, Mongodb, Neo4J, Redis, Memcached, Cassandra,
              Redis, Riak/Riak.ts
            </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">Strong PHP, C++ skills.</span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">Strong Regular Expression skills</span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">
              Frontend: Angular, Ionic, jQuery, ReactJS, Angular Universal,
              Typescript, NodeJS, PhantomJS etc.
            </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">Strong </span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">BPMN: activiti, camunda</span>
          </li>
          <li className="c1 c9 c4">
            <span className="c6">Android development</span>
          </li>
        </ul>
        <h1 className="c19" id="h.dgmlo4gykzbp">
          <span className="c13">WORK &amp; </span>
          <span className="c13 c7 c29">EXPERIENCE</span>
        </h1>
        <h2 className="c20" id="h.mu43qcboozqe">
          <span className="c13">Aurea software(Crossover) </span>
          <span className="c11 c15">- </span>
          <span className="c11">
            Java senior software architect(2017 April - 2019-December)
          </span>
        </h2>
        <ul className="c10 lst-kix_q43nwmkvrt8-0 start">
          <li className="c1 c9 c4">
            <span className="c6">
              Skills used: Java, Spring, Javascript, ExtJS, AngularJs, NodeJs,
              Swagger
            </span>
          </li>
          <li className="c1 c9 c4">
            <span>Projects: Accept 360, CxProcess, </span>
            <span>Vodafone</span>
            <span>&nbsp;India, Kayako, Crossover.com</span>
          </li>
        </ul>
        <h2 className="c20" id="h.25ksbxwbal7a">
          <span className="c13">Apexx</span>
          <span className="c13 c15 c23">&nbsp;</span>
          <span className="c11 c15">- </span>
          <span className="c11">
            Java backend developer (2015 Dec. - 2016 Aug)
          </span>
        </h2>
        <ul className="c10 lst-kix_71cy10c6bo5c-0 start">
          <li className="c1 c9 c4">
            <span>Projects: Union: online shop; </span>
            <span className="c6">
              Primeliber.com: open blog system; Primeesteem.com: Social network
              for Professionals and recruiting system
            </span>
          </li>
        </ul>
        <h2 className="c20" id="h.qttiqnuhschn">
          <span className="c13">CERT</span>
          <span className="c11 c15 c26">
            &nbsp;- Security advisor &amp; Programmer (2013 Oct. - Present){" "}
          </span>
        </h2>
        <ul className="c10 lst-kix_dpieomdpoi58-0 start">
          <li className="c1 c9 c4">
            <span className="c6">Security analysis of source codes</span>
          </li>
          <li className="c1 c9 c4">
            <span>Feed system</span>
          </li>
        </ul>
        <p className="c1">
          <span className="c7 c24">Projects:</span>
        </p>

        {projects
          .filter((item) => item.showOnResume)
          .sort((a, b) => a.order - b.order)
          .map((item) => (
            <ResumeProject {...item} />
          ))}
      </div>
    </div>
  );
};
