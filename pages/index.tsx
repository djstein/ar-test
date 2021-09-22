import Head from 'next/head'
import styled from 'styled-components'

const Main = styled.main`
  margin: 4rem;
`
const Title = styled.h1`
  color: var(--primary)};
`
const SubTitle = styled.h2`
  color: var(--primary)};
`
const StyledLink = styled.a`
  color: var(--primary)};
  text-decoration: none;
  padding: 0;
  margin-top: 0;
`

const Text = styled.p`color: var(--primary)};`

export const WORK = [
  {
    company: 'Apple',
    start: 'August 2019',
    end: 'Present',
    website: 'https://www.apple.com',
    summary: 'Senior Software Engineer'
  },
  {
    company: 'Apple',
    start: 'Nov 2018',
    end: 'August 2019',
    website: 'https://www.apple.com',
    summary: 'Fullstack Web Developer'
  },
  {
    company: 'BentoBox',
    start: 'Mar 2017',
    end: 'Nov 2018',
    website: 'https://www.getbento.com',
    summary: 'Fullstack Engineer'
  },
  {
    company: 'NCSU - OSCAR Labs',
    start: 'Aug 2014',
    end: 'Dec 2016',
    website: 'https://www.ncsu.edu',
    summary: 'Software Developer'
  },
  {
    company: 'BoostOurTeam',
    start: 'Oct 2015',
    end: 'Jan 2017',
    website: '#',
    summary: 'CTO'
  },
  {
    company: 'Sears Holdings',
    start: 'May 2016',
    end: 'Jul 2016',
    website: 'https://searsholdings.com',
    summary: 'Software Development Intern'
  },
  {
    company: 'Principal Financial Group',
    start: 'May 2013',
    end: 'Aug 2015',
    website: 'https://www.principal.com/',
    summary: 'RIS Java Development Intern'
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Dylan Stein</title>
        <meta name="description" content="Dylan Stein's Developer Page" />
      </Head>
      <Main>
        <Title>Dylan Stein</Title>
        <SubTitle> Senior software engineer @ Apple, Inc.</SubTitle>
        <StyledLink
          href="https://github.com/djstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </StyledLink>
        <br />
        <br />
        <StyledLink
          href="https://www.linkedin.com/in/dylanstein/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </StyledLink>
        <br />
        <br />
        {Object.entries(WORK).map(
          ([key, { website, company, summary, start, end }]) => (
            <div key={key}>
              <StyledLink
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text>{company}</Text>
                <Text>{summary}</Text>
                <Text>
                  {start} - {end}
                </Text>
              </StyledLink>
              <br />
            </div>
          )
        )}
      </Main>
    </>
  )
}
