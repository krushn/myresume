<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/REST_Controller.php');

class Portfolio extends REST_Controller {

    public function __construct() {
        parent::__construct();

        $this->load->model('portfolio_model');
    }

    public function index_get() {
        
        $rows = $this->portfolio_model->get_all();
        
        $result = array();
        
        foreach ($rows as $row){
            
            $row['image'] = site_url('upload/thumbs/'.$row['image']);
            
            $result[] = $row;
        }
        
        $this->response($result);
    }
    
    public function view_get($image_id) {
        
        $data = $this->portfolio_model->get($image_id);
        
        $data['image'] = site_url('upload/'.$data['image']);
        
        $this->response($data);
    }
}
