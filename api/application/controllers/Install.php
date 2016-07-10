<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Install extends CI_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index() {

        //error_reporting(0);

        $this->load->library('encrypt');
        $this->load->library('form_validation');

        $json = array();

        $json['status'] = 1;

        // validate input fields

        $this->form_validation->set_rules('db_host', 'Hostname', 'required');
        $this->form_validation->set_rules('db_username', 'Database username', 'required');
        //$this->form_validation->set_rules('db_password', 'Database password', 'required');
        $this->form_validation->set_rules('db_name', 'Database name', 'required');

        $this->form_validation->set_rules('username', 'Username', 'required');
        $this->form_validation->set_rules('password', 'Password', 'required');

        if ($this->form_validation->run() == FALSE) {
            $json['msg'] = validation_errors();
            $json['status'] = 0;
        }

        //step : 1 ) check db connection 
        
        if ($json['status']) {
            
            $db_host = $this->input->post('db_host');
            $db_username = $this->input->post('db_username');
            $db_password = $this->input->post('db_password');
            $db_name = $this->input->post('db_name');

            $username = $this->input->post('username');
            $password = $this->encrypt->encode($this->input->post('password'));

            $con = mysqli_init();

            if (!$con) {
                $json['msg'] = 'Error: Database connection error';
                $json['status'] = 0;
            }

            if (!mysqli_real_connect($con, $db_host, $db_username, $db_password, $db_name)) {
                $json['msg'] = 'Error: Database connection error';
                $json['status'] = 0;
            }
        }
        
        //step : 2 ) save database access + admin access + import sample sql 

        if ($json['status']) {

            $base_url = str_replace('install/', '', $_SERVER['HTTP_REFERER']) . 'api/';

            //config/database.php
            $content = file_get_contents(APPPATH . "config/database.php");

            $search = array(
                "'hostname' => '',",
                "'username' => '',",
                "'password' => '',",
                "'database' => '',"
            );

            $replace = array(
                "'hostname' => '" . $db_host . "',",
                "'username' => '" . $db_username . "',",
                "'password' => '" . $db_password . "',",
                "'database' => '" . $db_name . "',"
            );

            file_put_contents(APPPATH . "config/database.php", str_replace($search, $replace, $content));

            //config/config.php
            $content2 = file_get_contents(APPPATH . "config/config.php");

            $search2 = array(
                "['base_url'] = ''",
            );

            $replace2 = array(
                "['base_url'] = '" . $base_url . "'",
            );

            file_put_contents(APPPATH . "config/config.php", str_replace($search2, $replace2, $content2));

            $json['status'] = 1;

            //autoload.php
            $content3 = file_get_contents(APPPATH . "config/autoload.php");

            $search3 = "['libraries'] = array()";
            $replace3 = "['libraries'] = array('database', 'email', 'session')";

            file_put_contents(APPPATH . "config/autoload.php", str_replace($search3, $replace3, $content3));

            //import sample data 
            $sqlSource = file_get_contents(FCPATH . 'sample.sql');
            mysqli_multi_query($con, $sqlSource);

            //set to database
            mysqli_query($con, "update settings set value='" . $username . "' where name='username'");
            mysqli_query($con, "update settings set value='" . $password . "' where name='password'");
        }

        header('Content-Type: application/json');
        echo json_encode($json);
    }
}
