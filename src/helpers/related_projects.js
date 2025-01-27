'use strict'

module.exports = (categories, projectIds) => relatedProjects(categories, projectIds)

function relatedProjects (categories = [], projectIds = []) {
  const projectDocumentation = [
    {
      href: 'https://docs.spring.io/spring-framework/reference/',
      id: 'framework',
      text: 'Spring Framework',
      categories: ['core'],
    },
    {
      text: 'Spring Cloud',
      id: 'cloud',
      categories: ['cloud'],
      children: [
        {
          href: 'https://docs.spring.io/spring-cloud-build/reference/',
          id: 'cloud-build',
          text: 'Spring Cloud Build',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-bus/reference/',
          id: 'cloud-bus',
          text: 'Spring Cloud Bus',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-circuitbreaker/reference/',
          id: 'cloud-circuitbreaker',
          text: 'Spring Cloud Circuit Breaker',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-commons/reference/',
          id: 'cloud-commons',
          text: 'Spring Cloud Commons',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-config/reference/',
          id: 'cloud-config',
          text: 'Spring Cloud Config',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-consul/reference/',
          id: 'cloud-consul',
          text: 'Spring Cloud Consul',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-contract/reference/',
          id: 'cloud-contract',
          text: 'Spring Cloud Contract',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-function/reference/',
          id: 'cloud-function',
          text: 'Spring Cloud Function',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-gateway/reference/',
          id: 'cloud-gateway',
          text: 'Spring Cloud Gateway',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-kubernetes/reference/',
          id: 'cloud-kubernetes',
          text: 'Spring Cloud Kubernetes',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-netflix/reference/',
          id: 'cloud-netflix',
          text: 'Spring Cloud Netflix',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-openfeign/reference/',
          id: 'cloud-openfeign',
          text: 'Spring Cloud OpenFeign',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-stream/reference/',
          id: 'cloud-stream',
          text: 'Spring Cloud Stream',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-task/reference/',
          id: 'cloud-task',
          text: 'Spring Cloud Task',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-vault/reference/',
          id: 'cloud-vault',
          text: 'Spring Cloud Vault',
          categories: ['cloud'],
        },
        {
          href: 'https://docs.spring.io/spring-cloud-zookeeper/reference/',
          id: 'cloud-zookeeper',
          text: 'Spring Cloud Zookeeper',
          categories: ['cloud'],
        },
      ],
    },
    {
      text: 'Spring Data',
      id: 'data',
      categories: ['data'],
      children: [
        {
          href: 'https://docs.spring.io/spring-data/cassandra/reference/',
          id: 'data/cassandra',
          text: 'Spring Data Cassandra',
          categories: ['data'],
        },
        {
          href: 'https://docs.spring.io/spring-data/commons/reference/',
          id: 'data/commons',
          text: 'Spring Data Commons',
          categories: ['data'],
        },
        {
          href: 'https://docs.spring.io/spring-data/couchbase/reference/',
          id: 'data/couchbase',
          text: 'Spring Data Couchbase',
          categories: ['data'],
        },
        {
          href: 'https://docs.spring.io/spring-data/elasticsearch/reference/',
          id: 'data/elasticsearch',
          text: 'Spring Data Elasticsearch',
          categories: ['data'],
        },
        {
          href: 'https://docs.spring.io/spring-data/jpa/reference/',
          id: 'data/jpa',
          text: 'Spring Data JPA',
          categories: ['data'],
        },
        {
          href: 'https://docs.spring.io/spring-data/keyvalue/reference/',
          id: 'data/keyvalue',
          text: 'Spring Data KeyValue',
          categories: ['data'],
        },
        {
          href: 'https://docs.spring.io/spring-data/ldap/reference/',
          id: 'data/ldap',
          text: 'Spring Data LDAP',
          categories: ['data'],
        },
        {
          href: 'https://docs.spring.io/spring-data/mongodb/reference/',
          id: 'data/mongodb',
          text: 'Spring Data MongoDB',
          categories: ['data'],
        },
        {
          href: 'https://docs.spring.io/spring-data/neo4j/reference/',
          id: 'data/neo4j',
          text: 'Spring Data Neo4j',
          categories: ['data'],
        },
        {
          href: 'https://docs.spring.io/spring-data/redis/reference/',
          id: 'data/redis',
          text: 'Spring Data Redis',
          categories: ['data'],
        },
        {
          href: 'https://docs.spring.io/spring-data/relational/reference/',
          id: 'data/relational',
          text: 'Spring Data JDBC & R2DBC',
          categories: ['data'],
        },
        {
          href: 'https://docs.spring.io/spring-data/rest/reference/',
          id: 'data/rest',
          text: 'Spring Data REST',
          categories: ['data'],
        },
      ],
    },
    { href: 'https://docs.spring.io/spring-integration/reference/', id: 'integration', text: 'Spring Integration' },
    { href: 'https://docs.spring.io/spring-batch/reference/', id: 'batch', text: 'Spring Batch' },
    {
      href: 'https://docs.spring.io/spring-security/reference/',
      id: 'security',
      text: 'Spring Security',
      categories: ['security', 'core'],
      children: [
        {
          href: 'https://docs.spring.io/spring-authorization-server/reference/',
          id: 'authorization-server',
          text: 'Spring Authorization Server',
          categories: ['security'],
        },
        {
          href: 'https://docs.spring.io/spring-ldap/reference/',
          id: 'ldap',
          text: 'Spring LDAP',
          categories: ['security'],
        },
        {
          href: 'https://docs.spring.io/spring-security-kerberos/reference/',
          id: 'security-kerberos',
          text: 'Spring Security Kerberos',
          categories: ['security'],
        },
        {
          href: 'https://docs.spring.io/spring-session/reference/',
          id: 'session',
          text: 'Spring Session',
          categories: ['security'],
        },
        {
          href: 'https://docs.spring.io/spring-vault/reference/',
          id: 'vault',
          text: 'Spring Vault',
          categories: ['security'],
        },
      ],
    },
    { href: 'https://docs.spring.io/spring-ai/reference/', id: 'ai', text: 'Spring AI' },
    { href: 'https://docs.spring.io/spring-cli/reference/', id: 'cli', text: 'Spring CLI' },
    { href: 'https://docs.spring.io/spring-graphql/reference/', id: 'graphql', text: 'Spring GraphQL' },
    {
      href: 'https://docs.spring.io/spring-kafka/reference/',
      id: 'kafka',
      text: 'Spring for Apache Kafka',
      categories: ['messaging'],
    },
    { href: 'https://docs.spring.io/spring-modulith/reference/', id: 'modulith', text: 'Spring Modulith' },
    {
      href: 'https://docs.spring.io/spring-pulsar/reference/',
      id: 'pulsar',
      text: 'Spring for Apache Pulsar',
      categories: ['messaging'],
    },
    { href: 'https://docs.spring.io/spring-shell/reference/', id: 'shell', text: 'Spring Shell' },
  ]
  return projectDocumentation.filter(
    (p) => filterProjectByCategories(p, categories) || filterProjectByProjectIds(p, projectIds)
  )
}

function filterProjectByCategories (project, categories) {
  return (
    categories.length === 0 ||
    categories.some((category) => project.categories && project.categories.includes(category))
  )
}

function filterProjectByProjectIds (project, projectIds) {
  return projectIds.length === 0 || projectIds.some((projectId) => project.id === projectId)
}
