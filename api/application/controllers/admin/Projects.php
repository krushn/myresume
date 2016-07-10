<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/Admin_REST_Controller.php');

class Projects extends Admin_REST_Controller {

    public function __construct() {
        parent::__construct();

        $this->load->model('project_model');
    }

    public function index_get($page=1) {
        
        //pagination 
        $this->load->library('pagination');

        $limit = 10;
        $offset = ($page - 1) * $limit;

        $config['base_url'] = '#/projects/';
        $config['uri_segment'] = 4;
        $config['num_links'] = 5;
        $config['page_query_string'] = TRUE;
        $config['total_rows'] = $this->project_model->count_all();
        $config['per_page'] = $limit;

        $this->pagination->initialize($config);

        $data['pagination'] = $this->pagination->create_links();
        
        $data['rows'] = $this->project_model->get_list($offset, $limit);
        
        $this->response($data);
    }
    
    public function view_get($id) {
        $this->response($this->project_model->get($id));
    }
    
    public function update_post($id) {
        
        $this->project_model->update($id, $this->post());
                
        $this->response(array('status' => 1));
    }
    
    public function insert_post() {
        
        $this->project_model->add($this->post());
                
        $this->response(array('status' => 1));
    }
    
    public function delete_get($id) {
        
        //delete 
        $this->project_model->delete($id);
        
        //send updated list 
        $this->response($this->project_model->get_all());
    }
}
