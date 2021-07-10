import Head from 'next/head';
import { ReportCard } from '../components/exports';
import { Image3, Image7, Image2 } from '../assets/AssetExport';
import ReportData from '../data/reportsData.json';

/* fetct data from database */
export const getStaticProps = async () => {
  // const response = await fetch(OperatorsData); /// pass api end point
  // const data = await response.json();
  const response = await ReportData;
  const data = await response;


  return {
    props: { reports: data },
  }
}

export default function Home(props) {

  const { reports } = props;

  let danger = false;
  let warning = false;
  let normal = false;

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GeofinMaps Admin | Home</title>
        <meta name="description" content="The admin panel of the geofinmaps application for mtn ghana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-gray-900 h-full w-full">
        <div className="bg-white dark:bg-gray-900 h-full py-3 flex flex-col">
          {/* statistics */}
          <div className="mb-3">
            <div className="mb-3">
              <h1 className="headings">Statistics</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-4 bg-white dark:bg-gray-900">
              <ReportCard
                url={"/reports/1"}
                reportTitle="Statistical data and plot"
                reportDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione exercitationem inventore fuga recusandae, natus aut? Id rerum neque molestiae nisi? Aspernatur numquam quis quisquam doloremque vitae maiores voluptas modi!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione exercitationem inventore fuga recusandae, natus aut? Id rerum neque molestiae nisi? Aspernatur numquam quis quisquam doloremque vitae maiores voluptas modi!"

                reportAuthor="John Doe"
                reportImage={Image2}
              />
              <ReportCard
                url={"/reports/2"}
                reportTitle="Statistical data and plot"
                reportDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione exercitationem inventore fuga recusandae, natus aut? Id rerum neque molestiae nisi? Aspernatur numquam quis quisquam doloremque vitae maiores voluptas modi!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ratione exercitationem inventore fuga recusandae, natus aut? Id rerum neque molestiae nisi? Aspernatur numquam quis quisquam doloremque vitae maiores voluptas modi!"

                reportAuthor="John Doe"
                reportImage={Image3}
              />

            </div>
          </div>

          {/* reports */}
          <div className="mb-3 bg-white dark:bg-gray-900">
            <div className="mb-3">
              <h1 className="headings">Recent Reports</h1>
            </div>
            <div className="grid md:grid-cols-2 gap-4 bg-white dark:bg-gray-900">
              {
                reports.map(item => {
                  if (item.reportType === 1) {
                    danger = true;
                    warning = false;
                    normal = false;
                  } else if (item.reportType === 2) {
                    danger = false;
                    warning = true;
                    normal = false;
                  } else {
                    danger = false;
                    warning = false;
                    normal = true;
                  }
                  return (
                    <div key={item.id}>
                      <ReportCard
                        url={'/reports/' + item.id}
                        reportTitle={item.title}
                        reportDescription={item.description}
                        reportAuthor={item.author}
                        reportImage={Image7}
                        danger={danger}
                        warning={warning}
                        normal={normal}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
