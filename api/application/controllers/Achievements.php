<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/REST_Controller.php');

class Achievements extends REST_Controller {

    public function __construct() {
        parent::__construct();

        $this->load->model('achievement_model');
    }

    public function index_get() {
        $this->response($this->achievement_model->get_all());
    }

}
