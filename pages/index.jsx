import { useEffect } from 'react';
import Head from 'next/head';
import { ReportCard, StatisticsCard } from '../components/exports';
import { Image7 } from '../assets/AssetExport';
import ReportData from '../data/reportsData.json';
import OperatorsData from '../data/operators.json';

/* fetct data from database */
export const getStaticProps = async () => {
  // const response = await fetch(OperatorsData); /// pass api end point
  // const data = await response.json();
  const response = await ReportData;
  const users = await OperatorsData;
  const data = await response;
  const userData = await users;


  return {
    props: { reports: data, users: userData },
  }
}

export default function Home(props) {

  const { reports, users } = props;
  let danger = false;
  let warning = false;
  let normal = false;

  /* dash items colors  */
  let normalDash = false;
  let warningDash = false;
  let criticalDash = false;
  let notDash = true;

  let criticalReports = 0;
  let warningReports = 0;
  let normalReports = 0;

  let usersOnline = 0;

  const handleCounts = () => {
    // handle users stuff
    users.forEach((user) => {
      if (user.isOnline) {
        usersOnline++;
      }
    });

    // handle report stuff
    reports.forEach((report) => {
      if (report.reportType == 1) {
        criticalDash = true;
        criticalReports++;
      } else if (report.reportType == 2) {
        warningDash = true;
        warningReports++;
      } else {
        normalDash = true;
        normalReports++;
      }
    });

  }

  handleCounts();

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
            <div className="grid md:grid-cols-3 gap-4 bg-white dark:bg-gray-900">
              < StatisticsCard
                notDash={notDash}
                itemTitle={"Total Users"}
                itemCount={users.length}
              />
              < StatisticsCard
                notDash={notDash}
                itemTitle={"Total Users Online"}
                itemCount={usersOnline}
              />
              < StatisticsCard
                notDash={notDash}
                itemTitle={"Total Reports"}
                itemCount={reports.length}
              />
            </div>
            <div className="mt-4">
              <div className="grid md:grid-cols-3 gap-4 bg-white dark:bg-gray-900">
                < StatisticsCard
                  normalDash={normalDash}
                  itemTitle={"Normal Reports"}
                  itemCount={normalReports}
                />
                < StatisticsCard
                  warningDash={warningDash}
                  itemTitle={"Warning Reports"}
                  itemCount={warningReports}
                />
                < StatisticsCard
                  criticalDash={criticalDash}
                  itemTitle={"Critical Reports"}
                  itemCount={criticalReports}
                />
              </div>
            </div>
          </div>

          {/* reports */}
          <div className="mb-3 mt-4 bg-white dark:bg-gray-900">
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
