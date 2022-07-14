import { gql } from "@apollo/client";

const FILMS_QUERY = gql`
    {
      launchesPast(limit: 25) {
        mission_name
        launch_date_local
        links {
          video_link
        }
        id
        launch_site {
          site_name_long
          site_name
        }
        launch_success
        launch_year
      }
    }
`;

export default FILMS_QUERY;