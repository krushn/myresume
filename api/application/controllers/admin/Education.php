<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/Admin_REST_Controller.php');

class Education extends Admin_REST_Controller {

    public function __construct() {
        parent::__construct();

        $this->load->model('education_model');
    }

    public function index_get($page=1) {
        
        //pagination 
        $this->load->library('pagination');

        $limit = 10;
        $offset = ($page - 1) * $limit;

        $config['base_url'] = '#/education/';
        $config['uri_segment'] = 4;
        $config['num_links'] = 5;
        $config['use_page_numbers'] = TRUE;
        $config['total_rows'] = $this->education_model->count_all();
        $config['per_page'] = $limit;

        $this->pagination->initialize($config);

        $data['pagination'] = $this->pagination->create_links();
        
        $data['rows'] = $this->education_model->get_list($offset, $limit);
        
        $this->response($data);
    }
    
    public function view_get($id) {
        $this->response($this->education_model->get($id));
    }
    
    public function update_post($id) {
        
        $this->education_model->update($id, $this->post());
                
        $this->response(array('status' => 1));
    }
    
    public function insert_post() {
        
        $this->education_model->add($this->post());
                
        $this->response(array('status' => 1));
    }
    
    public function delete_get($id) {
        
        //delete 
        $this->education_model->delete($id);
        
        //send updated list 
        $this->response($this->education_model->get_all());
    }
}
