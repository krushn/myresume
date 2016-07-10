<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/REST_Controller.php');

class Education extends REST_Controller {

    public function __construct() {
        parent::__construct();

        $this->load->model('education_model');
    }

    public function index_get() {
        $this->response($this->education_model->get_all());
    }

}
