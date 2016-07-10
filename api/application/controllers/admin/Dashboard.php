<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/Admin_REST_Controller.php');

class Dashboard extends Admin_REST_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('dashboard_model');
    }

    public function index_get() {
        
        $data['achievements'] = $this->dashboard_model->getTotalAchievements();
        $data['projects'] = $this->dashboard_model->getTotalProjects();
        $data['portfolio'] = $this->dashboard_model->getTotalPortfolio();
        $data['certificate'] = $this->dashboard_model->getTotalCertificate();
        
        $this->response($data);
    }
    
    public function getGraphData_get($type) {
        
        $data = $this->dashboard_model->getGraphData($type);
        
        $this->response($data);
    }    
}
