<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181115131215 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE level (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, time INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE level_step (level_id INT NOT NULL, step_id INT NOT NULL, INDEX IDX_2A9C052D5FB14BA7 (level_id), INDEX IDX_2A9C052D73B21E9C (step_id), PRIMARY KEY(level_id, step_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE level_step ADD CONSTRAINT FK_2A9C052D5FB14BA7 FOREIGN KEY (level_id) REFERENCES level (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE level_step ADD CONSTRAINT FK_2A9C052D73B21E9C FOREIGN KEY (step_id) REFERENCES step (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE question ADD step_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE question ADD CONSTRAINT FK_B6F7494E73B21E9C FOREIGN KEY (step_id) REFERENCES step (id)');
        $this->addSql('CREATE INDEX IDX_B6F7494E73B21E9C ON question (step_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE level_step DROP FOREIGN KEY FK_2A9C052D5FB14BA7');
        $this->addSql('DROP TABLE level');
        $this->addSql('DROP TABLE level_step');
        $this->addSql('ALTER TABLE question DROP FOREIGN KEY FK_B6F7494E73B21E9C');
        $this->addSql('DROP INDEX IDX_B6F7494E73B21E9C ON question');
        $this->addSql('ALTER TABLE question DROP step_id');
    }
}
