<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="10">
        <v-card class="info">
          <v-container fluid>
            <v-row>
              <v-col xs="1" sm="3">
                <v-img
                  src='https://s3-ap-northeast-1.amazonaws.com/tabi-channel/upload_by_admin/newyork_travel_800.jpg'
                  height="130px"></v-img>
              </v-col>
              <v-col xs="2" sm="8">
                <v-card-title>
                  <div>
                    <h3 class="white--text">My Meetup</h3>
                    <h6>17th July 2017</h6>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn text to='/meetup/1'>
                    <v-icon left>mdi-arrow-right</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
